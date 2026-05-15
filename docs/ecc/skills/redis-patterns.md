---
sidebar_position: 10
---

# redis-patterns

> *Redis data structure patterns, caching strategies, distributed locks, rate limiting, pub/sub.*

Redis 数据结构选择和缓存策略。

## 触发条件

- 添加缓存
- 实现限流或节流
- 构建分布式锁
- 设置 session 或 token 存储

## 缓存模式

```python
# Cache-aside：先查缓存
value = redis.get(key)
if value is None:
    value = db.query(...)
    redis.setex(key, 3600, value)  # 1h TTL
return value
```

## 分布式锁

```bash
# 正确：SET NX EX 原子操作
SET lock:task_42 "owner_1" NX EX 30

# 释放前验证持有者（Lua 脚本确保原子性）
if redis.call("get", KEYS[1]) == ARGV[1] then
    return redis.call("del", KEYS[1])
end
```

## 限流器

```python
# 滑动窗口限流
key = f"rate:{user_id}"
now = time.time()
redis.zremrangebyscore(key, 0, now - 60)  # 清除 1 分钟前
count = redis.zcard(key)
if count < 100:
    redis.zadd(key, {f"{now}:{uuid4()}": now})
    redis.expire(key, 60)
    return True  # 允许
return False  # 限流
```
