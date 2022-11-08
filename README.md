<!--
SPDX-FileCopyrightText: 2022 Glasswings

SPDX-License-Identifier: AGPL-3.0-or-later
-->

Welcome to the source of Patanor
================================

This repository contains the source code for my personal website,
front-end, build scripts, and possibly backend if I decide to add
those components.  I'm publishing it because I
want you, the person reading this, to be allowed to explore it,
play with it, and maybe even re-host it or take parts for re-use.

When I choose a license, I classify content into three different
groups.  They're not in separate repositories so please pay
attention to the SPDX headers and .license files.

Setup
-----

You'll need Node.js installed on your system or in a container.
I haven't written a container configuration yet; this deploys to
Render.com with just the BUILD script.

If you're completely new to webdev and using Windows, welcome!  I
recommend following the [Odin Project][odin-inst] installation
instructions.  That will give you Xubuntu running inside
VirtualBox.  The next page shows you how to install VS Code,
which is okay, but [Codium][vscodium] is better about your
privacy.  Both Codium and Node.js can be installed using Snap so
the command

    snap install --classic codium node

should get you started.  You'll also need a browser, basic command line
knowledge and git, the next several pages of The Odin Project
tutorial.

[odin-inst]: https://www.theodinproject.com/lessons/foundations-text-editors
[vscodium]: https://vscodium.com/#install

Once you have the prerequisites set up and this repository cloned
and `cd` into that directory, 

    npm ci # to set up Eleventy and other dependencies
    npm start # to start a develpoment server on localhost:8080

Repeat the ci command whenever you switch to a different version
or branch.  It's sometimes necessary to restart the devserver if
you add a new file or change the Eleventy config; ctrl-c stops
it.  Most of the time simply saving a file is enough for Eleventy to
notice and refresh your browser for you.

Deploying
---------

If you're deploying an exact mirror the copyright notices are
ready to go.  

If you deploy a modified version of the templates, please modify
the [license page](src/about/license) to point to your
repository.

Currently I'm deploying on render.com which needs the following
settings:

 - build command `./BUILD.sh`
 - publish directory `_site`

Templates and similar infrastructure
------------------------------------

These are licensed under the GNU Affero General Public License.
This identifies a "source form" (the form that is intended for
creation, study, modification) and the basic rule is that readers
of the site should be able to access and reuse the source form.

I invite you to reuse templates, just make sure that users can
get the source from somewhere (such as a GitHub).  If you make
changes to templates, you have to share them with users and I'd
appreciate if you share them with me.  But that's not required.

Short-form blogging
-------------------

This content is licenced under Creative Commons Attribution.
You're invited to do pretty much anything with this content,
including commercial reuse, remixes, as long as you still give me
credit.

I figure that I'm willing to give those rights to a giant web2.0
company anyway so there's no reason to hold them back from random
small creators.  Everyone gets a slice of the pie, please feel
free to syndicate.

Long-form articles
------------------

These are licensed Creative Commons Non-Commercial Share-Alike.
Feel free to reuse them as long as the audience isn't required to
give something up in order to access my content.  ("Our content"
if you remix it.)  Things they shouldn't have to give up include
subscription fees, privacy, or peace of mind.

To be clear, yes, you may run ads, sponsorship deals, a
membership program, and similar on a site where you also
syndicate my content.  I can't use this README to add
restrictions to the license, but I would prefer that you don't
put syndicated content in paid membership tiers or pair it with
annoying or privacy-invading advertising.

In cases of doubt, you may use my short-form content that doesn't
have the NC restriction, or you can contact me via GitHub or
<glasswings363@pm.me>.
