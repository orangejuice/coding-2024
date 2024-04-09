一个题目是实现一个rate limiter. 用javascript实现

第一问： 2秒之内只能发5个request， 怎么limit 

第二问： 如果request 里面有customer id, 怎么让这个rate limit是customer specific的
（就是 customer 1 的limit超过了 并不影响 customer 2 的 request） 

第三问： 有的request 会比其他的request 更 expensive。那么如果 input 里面还有一个关于 request weight 的信息，怎么改这个function。
（比如 request 1 要占两个request的位置，怎么改）这个要自己多加一点test case， 就什么limit是 5 request/2s, 那么一个weight 是6 的request就直接fail之类的。
