---
title: 15 Python Snippets That I Reuse in Every Project
created: 2025-07-27
modified: 2025-07-27
tags:
  - clippings/medium
author:
  - "[[Abdur Rahman]]"
class:
  - "[[BlogPosting]]"
description: So here’s mine. These are not your average “Hello World” examples. These are battle-tested, shortcut-worthy, “I use this in production weekly” snippets. If you enjoyed reading, be sure to give it 50…
published: 2025-07-24
source: https://blog.stackademic.com/15-python-snippets-that-i-reuse-in-every-project-cda2edbd4e51
subject:
  - "[[Python]]"
---
# 15 Python Snippets That I Reuse in Every Project
[Sitemap](https://blog.stackademic.com/sitemap/sitemap.xml)## [Stackademic](https://blog.stackademic.com/?source=post_page---publication_nav-d1baaa8417a4-cda2edbd4e51---------------------------------------)

[![Stackademic](https://miro.medium.com/v2/resize:fill:76:76/1*U-kjsW7IZUobnoy1gAp1UQ.png)](https://blog.stackademic.com/?source=post_page---post_publication_sidebar-d1baaa8417a4-cda2edbd4e51---------------------------------------)

Stackademic is a learning hub for programmers, devs, coders, and engineers. Our goal is to democratize free coding education for the world.

![](https://miro.medium.com/v2/resize:fit:2000/0*jvu0Akhmk391LWix)

Image Generated using Sora

I’ve been writing Python long enough to know two things:

1. Most code is just glorified copy-paste
2. The best devs don’t memorize everything — they collect their own personal toolkits.

So here’s mine. These are not your average “Hello World” examples. These are battle-tested, shortcut-worthy, *“I use this in production weekly”* snippets.

And yes, I’ve obsessively tweaked every one of them for speed, readability, and practicality.

Let’s get to it.

## 1\. Silently Create Nested Folders (No More FileExistsError)

```hs
from pathlib import Path

def mkdir_safely(path):
    Path(path).mkdir(parents=True, exist_ok=True)
```

📁 No more `os.makedirs()` drama. This just works. Quietly, reliably, deeply.

## 2\. Throttle Any Function (Prevent API Rate-Limiting)

```hs
import time
from functools import wraps

def throttle(seconds):
    def decorator(func):
        last_call = [0]
        @wraps(func)
        def wrapped(*args, **kwargs):
            elapsed = time.time() - last_call[0]
            if elapsed < seconds:
                time.sleep(seconds - elapsed)
            last_call[0] = time.time()
            return func(*args, **kwargs)
        return wrapped
    return decorator
```

⚙️ Perfect when scraping websites that scream at you with 429 errors.

## 3\. JSON Pretty Printer with Syntax Highlighting

```hs
import json
from pygments import highlight, lexers, formatters

def pretty_json(data):
    colorful = highlight(
        json.dumps(data, indent=2),
        lexers.JsonLexer(),
        formatters.TerminalFormatter()
    )
    print(colorful)
```

🖼️ Better than `print(json.dumps())`. Treat your terminal like a code editor.

## 4\. Human-Readable Time Deltas

```hs
from datetime import datetime

def time_since(past):
    now = datetime.now()
    delta = now - past
    seconds = int(delta.total_seconds())
    periods = [
        ('year', 60*60*24*365),
        ('month', 60*60*24*30),
        ('day', 60*60*24),
        ('hour', 60*60),
        ('minute', 60),
        ('second', 1)
    ]
    for name, count in periods:
        value = seconds // count
        if value:
            return f"{value} {name}{'s' if value > 1 else ''} ago"
    return "just now"
```

⏱️ Because `datetime.datetime(2023, 4, 17, 18, 24, 12)` tells me nothing.

## 5\. Try-Except Wrapper with Logging and Retry

```hs
import logging
import time

def safe_run(func, retries=3, delay=1):
    for attempt in range(retries):
        try:
            return func()
        except Exception as e:
            logging.warning(f"Attempt {attempt+1} failed: {e}")
            time.sleep(delay)
    logging.error(f"All {retries} attempts failed.")
```

🔥 You will *absolutely* use this when dealing with flaky APIs or hardware sensors.

## 6\. Flatten a Deeply Nested List (1-Liner Magic)

```hs
from collections.abc import Iterable

def flatten(lst):
    for item in lst:
        if isinstance(item, Iterable) and not isinstance(item, (str, bytes)):
            yield from flatten(item)
        else:
            yield item
```

🧅 Because `[1, [2, [3, [4]]]]` should just be `[1, 2, 3, 4]`.

## 7\. Memoize Any Function Without LRU

```hs
def memoize(func):
    cache = {}
    def wrapper(*args):
        if args in cache:
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result
    return wrapper
```

⚡️ When performance matters and you don’t want the full `@lru_cache` behavior.

## 8\. Run Shell Commands and Capture Output

```hs
import subprocess

def run(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout.strip()
```

🖥️ No need for `os.system()` anymore. This is cleaner, safer, and testable.

## 9\. Convert Snake Case to Camel Case

```hs
def snake_to_camel(s):
    parts = s.split('_')
    return parts[0] + ''.join(word.title() for word in parts[1:])
```

🐍 → 🐫
From `user_id` to `userId`, because frontend devs won’t stop asking.

## 10\. Parse a Human-Readable File Size (Like ‘2.3 MB’)

```hs
def parse_size(size_str):
    units = {"B": 1, "KB": 1<<10, "MB": 1<<20, "GB": 1<<30, "TB": 1<<40}
    num, unit = size_str.strip().upper().split()
    return int(float(num) * units[unit])
```

🧮 For when you get `"2.3 MB"` from a config file and actually want to *use* it.

## 11\. Chunk a List into N-Sized Pieces

```hs
def chunked(lst, size):
    for i in range(0, len(lst), size):
        yield lst[i:i + size]
```

📦 Perfect for batching API calls or splitting CSV rows.

## 12\. Track Execution Time of Any Block (Context Manager Style)

```hs
import time
from contextlib import contextmanager

@contextmanager
def timer(name="Block"):
    start = time.time()
    yield
    end = time.time()
    print(f"{name} took {end - start:.4f} seconds")
```

⏳ “Why is this function slow?” — this snippet will tell you.

## 13\. Parse Environment Variables with Default and Type Support

```hs
import os

def get_env(key, default=None, cast=str):
    value = os.getenv(key, default)
    try:
        return cast(value)
    except:
        return default
```

🔐 Great for projects that use `.env` files or Docker setups.

## 14\. Auto-Retry Decorator with Exponential Backoff

```hs
import time
import random

def retry_backoff(max_retries=5):
    def decorator(func):
        def wrapper(*args, **kwargs):
            delay = 1
            for attempt in range(max_retries):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    wait = delay * (2 ** attempt) + random.uniform(0, 0.1)
                    print(f"Retry {attempt+1} failed: {e} - retrying in {wait:.2f}s")
                    time.sleep(wait)
            raise RuntimeError(f"Failed after {max_retries} retries.")
        return wrapper
    return decorator
```

☄️ Resilient code doesn’t fail once and give up. This retries smarter.

## 15\. Load a CSV into a List of Dicts in One Line

```hs
import csv

def read_csv(path):
    with open(path, newline='') as f:
        return list(csv.DictReader(f))
```

🧾 You’ll use this more times than you think. Parsing CSVs cleanly is a low-key superpower.
