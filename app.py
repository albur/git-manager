#!/usr/bin/env python

import config
from lib.bottle import route, run, static_file

@route("/api/1/repo/<info>")
def repo(info):
    return static_file(info + ".json", root=config.repo_info_dir)

@route("/api/1/heads/<remote>")
def heads(remote):
    return static_file(remote + ".json", root=config.heads_dir)

@route("/api/1/logs/<remote>")
def logs(remote):
    return static_file(remote + ".json", root=config.logs_dir)

run(host="localhost", port=8123)
