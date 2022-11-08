---
SPDX-FileCopyrightText: 2022 Glasswings
SPDX-License-Identifier: CC-BY-4.0

title: 'Next Project: RSVP'
date: 2022-11-08
layout: 'layout/main.html'
---

For my next learning project I'll be making an RSVP service.  It
allows an event planner to create invitation links to a page that
shows the time of an upcoming event and allows them to respond.
I'll use JAMstack technologies to do this.

---


This will be a break from my general rule of "make my own
dogfood."  I don't have an immediate need for the capability
(there are plenty of Discord bots and existing web sites that
solve exactly this problem) but I think it hits the sweet-spot of
having just enough complexity to be interesting, yet simple
enough that I can use it to teach myself backend.

This will be my first web project with a backend.

## Use stories

-   RSVP recognizes a single administrator and allows her to
    create / delete events

-   RSVP creates invitation links and uses them to authenticate
    participants

-   Events have a title, start, and end time specified by the
    administrator and a list of invitees

-   Times are displayed in both UTC and the user's local time

-   Invited participants can react with their status and a short
    message

-   Administrator and all participants can see everyone's status

This version will have no email or webmention powers, no public
invitations.

## Architecture

Render only offers PostgreSQL servers, so that's what I'll use
for ACID.  The dynamic service will be written in Phoenix/Elixir
(because I think functional programming is pretty nifty but
haven't done enough of it yet).  User interface in vanilla JS.

An idea I'm playing with is that one shouldn't use a fancy
database without a plan to migrate plain text into and out of it.
This is inspired by [Indieweb skepticisim towards
databases][db-antipattern] and it's too early for me to say it as
a maxim, but I'll develop a plain-text form as well plus
import-export tools.

[db-antipattern]: https://indieweb.org/databases-antipattern

For that tooling it sounds like Perl is a good choice, so I'll
learn a little bit of that.

## First steps

I want to do authentication first.  It doesn't care about the
other business logic, just "is this invitation code valid?" and
"is that the admin password / cookie?"

So the very first things to do are

-   Install Postgres locally

-   Run through a Perl tutorial to grasp the basic syntax

-   Specify API calls for admin authentication

-   Implement them in Phoenix
