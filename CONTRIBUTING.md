# Contributing

## Getting Started

- [Ensure you have a GitHub account][join].
- Feel free to open an issue to report any bugs.
- The discussions page (if one exists for the repository) is a free, safe, and open environment to
  discuss:
  - Feature requests.
  - Showcases.
  - Whatever comes to mind!

## The Basics

> Maintainers may push directly to `main` for minor documentation fixes.

1. Fork the repository.
2. Branch from `main` in your fork.
3. Open pull requests (PRs) from your fork's new branch to our repository's `main` branch.
4. The branch should be named `short_description`, e.g., `fix_padding`.

Note that any code must be in American English and any comments should be in Australian English.
Errors will not be rejected in PR but likely will be overwritten in later code changes.

## Issue Correspondence

An issue has:

- Exactly one assignee.
- Ideally exactly one branch.

## Slightly More Advanced Rules

1. If `main` is ahead of your branch, make yourself level with `main` by rebasing before submitting
   a pull request.
2. Once the PR is opened please do not rebase anymore.
3. If your branch goes stale it may be closed at the maintainers' discretion.

## Quality Control

There are quality control standards.

- Run your code under as many code quality checks as possible.
- Make sure it is readable and well-documented.
- Make sure it adheres to language/framework-specific conventions.

## Maintainers' Guide

### Sprint Planning

GitHub Projects defines sprints internally. At the end of a sprint, the team decides whether a
release should be created. The release cutoff is more or less arbitrary.

Hotfixes can be created any time and released immediately.

### Release Documentation

1. On each `git tag`, a GitHub Release is created as a draft.
2. The maintainer must write a human-readable changelog for that version before publishing the
   Release.

Changelogs are for humans, and it should be a human process to perform the release.

[join]: https://github.com/join
