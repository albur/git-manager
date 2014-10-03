# GitManager

GitManager is a web tool which allows you to inspect and compare Git repositories.

## How to run it

1. Edit [config.py](config.py).
2. Start the application with `python3 app.py`.
3. Open it at http://localhost:8123.

## API

- `GET /api/1/reload` => Generate JSON reports and save them on disk.
- `GET /api/1/repos` => List the remotes and their HEAD branches.
- `GET /api/1/repos/<remote name>/commits` => List the commits from a remote
which are not on production.

## Use case

Imagine a setup with repositories in the following servers:

- Stage: The project is built and deployed from this server. It contains only stable code.
- Test01: The QA team tests feature branches on this server.
- Test02: Same as Test01.

GitManager shows you:

- The HEAD branches in Test01 and Test02 (`/api/1/repos`):

```
[
  {
    "name": "test01",
    "head": "new-page"
  },
  {
    "name": "test02",
    "head": "issue-1453"
  }
]
```

- The commits in Test01 and Test02 that aren't on Stage yet (`/api/1/repos/test02/commits`):

```
[
  {
    "hash": "285171018cdf7ae375fb6cbc974c7027cfb451b7",
    "short_hash": "2851710",
    "author_name": "Alberto Burgos",
    "author_email": "albertoburgosmh@gmail.com",
    "date": "1411940795",
    "message": "Issue 1453: Improve API URLs"
  },
  ...
]
```
