type Num = { prev?: Num; zero: boolean };
type Succ<N extends Num> = { prev: N; zero: false };
type Pred<N extends Num> = N["prev"] extends Num ? N["prev"] : _0;

type _0 = { zero: true };
type _1 = Succ<_0>;
type _2 = Succ<_1>;
type _3 = Succ<_2>;
type _4 = Succ<_3>;
type _5 = Succ<_4>;
type _6 = Succ<_5>;
type _7 = Succ<_6>;
type _8 = Succ<_7>;
type _9 = Succ<_8>;
type _10 = Succ<_9>;

type Add<A extends Num, B extends Num> = A extends _0
	? B
	: Succ<Add<Pred<A>, B>>;
type Sub<A extends Num, B extends Num> = B extends _0
	? A
	: Pred<Sub<A, Pred<B>>>;
type Multiply<A extends Num, B extends Num> = B extends _0
	? _0
	: Add<A, Multiply<A, Pred<B>>>;

type Fib<N extends Num> = N extends _0
	? N
	: N extends _1
	  ? N
	  : Add<Fib<Pred<N>>, Fib<Sub<N, _2>>>;

type Factorial<N extends Num> = N extends _0
    ? _1
    : Multiply<N, Factorial<Pred<N>>>

type Modulo<A extends Num, B extends Num> = B extends _0
    ? _0
    : ModHelper<Sub<A,B>, B>

type ModHelper<A extends Num, B extends Num> = Sub<A,B> extends _0 
    ? A extends B
      ? Modulo<A, B>
      : A
    : Modulo<A, B>

type IsEven<N extends Num> = Modulo<N,_2> extends _0
    ? true
    : false

type Result = Add<_2, _2>;
