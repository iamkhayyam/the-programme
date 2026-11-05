// Segmented odd-only sieve. Streams primes in order and accumulates statistics.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <math.h>

#define SEG (1<<21)
#define MAXGAP 2000
typedef unsigned long long u64;

static u64 trans10[10][10];
static u64 trans3[3][3];
static u64 trans4[4][4];
static u64 trans5[5][5];
static u64 gaphist[MAXGAP+1];
static u64 pcount=0;      // number of primes seen
static u64 prev=0;
static u64 twin_le_1e9=0; // twin pairs (p,p+2) with p<=1e9
static u64 pi3[3];        // primes p<=x by residue mod 3
static u64 pi10[10];
static u64 next_x_milestone=10;
static u64 next_n_milestone=1000000;
static u64 NMAX;

static void dump_n(u64 n, u64 p){
  printf("== n=%llu primes, p_n=%llu\n", n, p);
  int d[4]={1,3,7,9};
  for(int i=0;i<4;i++){ printf("T10 %d:",d[i]); for(int j=0;j<4;j++) printf(" %llu",trans10[d[i]][d[j]]); printf("\n");}
  printf("T3:"); for(int i=1;i<3;i++)for(int j=1;j<3;j++) printf(" (%d,%d)=%llu",i,j,trans3[i][j]); printf("\n");
  printf("T4:"); for(int i=1;i<4;i+=2)for(int j=1;j<4;j+=2) printf(" (%d,%d)=%llu",i,j,trans4[i][j]); printf("\n");
  printf("T5:"); for(int i=1;i<5;i++){for(int j=1;j<5;j++) printf(" %llu",trans5[i][j]); printf(" |");} printf("\n");
  printf("GAPS:"); for(int g=1; g<=60; g++) if(gaphist[g]) printf(" %d:%llu",g,gaphist[g]); printf("\n");
  fflush(stdout);
}
static void dump_x(u64 x){
  printf("== x=%llu pi=%llu pi(3,1)=%llu pi(3,2)=%llu diff21=%lld twins(p<=1e9 so far)=%llu\n", x, pcount, pi3[1], pi3[2], (long long)pi3[2]-(long long)pi3[1], twin_le_1e9);
  printf("   pi10: 1:%llu 3:%llu 7:%llu 9:%llu\n", pi10[1],pi10[3],pi10[7],pi10[9]);
  fflush(stdout);
}

static int done=0;
static inline void see(u64 p){
  // milestones in x: primes <= x counted before processing p > x
  while(p > next_x_milestone && next_x_milestone <= 100000000000ULL){ dump_x(next_x_milestone); next_x_milestone*=10; }
  if(prev){
    // pair (prev, p) where prev is the n-th prime, n = pcount
    trans10[prev%10][p%10]++;
    if(prev>3) trans3[prev%3][p%3]++;
    if(prev>2) trans4[prev%4][p%4]++;
    if(prev>5) trans5[prev%5][p%5]++;
    u64 g=p-prev; if(g<=MAXGAP) gaphist[g]++;
    if(g==2 && prev<=1000000000ULL) twin_le_1e9++;
    if(pcount==next_n_milestone){ dump_n(pcount, prev); next_n_milestone*=10; if(pcount>=NMAX){done=1;return;} }
  }
  pcount++; pi3[p%3]++; pi10[p%10]++;
  prev=p;
}

int main(int argc, char**argv){
  NMAX = strtoull(argv[1],0,10);
  u64 L = strtoull(argv[2],0,10);
  u64 r = (u64)sqrtl((long double)L)+2;
  // simple sieve for base primes
  char *s = calloc(r+1,1); 
  u64 *bp = malloc(sizeof(u64)*(r/2+10)); u64 nb=0;
  for(u64 i=2;i<=r;i++){ if(!s[i]){ bp[nb++]=i; for(u64 j=i*i;j<=r;j+=i) s[j]=1; } }
  see(2);
  // odd numbers: index k represents 2k+1. segment covers k in [lo, lo+SEG)
  u64 *nextk = malloc(sizeof(u64)*nb);
  for(u64 i=1;i<nb;i++){ u64 p=bp[i]; nextk[i]=(p*p)/2; }
  unsigned char *seg = malloc(SEG);
  u64 maxk = L/2+1;
  for(u64 lo=1; lo<maxk && !done; lo+=SEG){
    memset(seg,0,SEG);
    u64 hi=lo+SEG;
    for(u64 i=1;i<nb;i++){
      u64 p=bp[i]; u64 k=nextk[i];
      if(k>=hi) continue;
      for(; k<hi; k+=p) seg[k-lo]=1;
      nextk[i]=k;
    }
    for(u64 k=lo;k<hi && k<maxk && !done;k++){
      if(!seg[k-lo]) see(2*k+1);
    }
  }
  if(!done) { printf("ended at pcount=%llu prev=%llu\n",pcount,prev); }
  return 0;
}
