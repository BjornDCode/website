---
title: Launching Conference HQ
slug: launching-conference-hq
series: conference-hq
published_at: 2019-08-04
---

During my summer holiday I finished up a side project. The project is called [Conference HQ](https://conferencehq.io). It's a directory of conferences in the tech and design world.

I've seen sites like these before but they are usually targeted towards a specific niche (e.g [Testing Conferences](https://testingconferences.org/)). Conference HQ is focused on a broader market. This makes it possible to get an overview of all the conferences you might be interested in and filter based on specific criteria.

## Why did I make it?

I enjoy going to conferences but I don't do it as much as I would like to. I've attended some frontend conferences but I'm also interested in other subjects. I've never found a solid way to get an overview of what events are happening.

The way I've learned about conferences in the past has usually been on Twitter. The problem with this is that I hear about them when they are currently happening. When it's hosted again a year later I've usually forgotten about it.

## Third time's the charm

I've tried building this project twice in the past.

The first time was one year ago. I was interested in streaming while creating a project from start to finish. I chose Conference HQ because it seemed manageable. I never built up the courage to start streaming though and I quickly lost interest in the project.

The second time was in March. This time I didn't think about streaming. I wanted to built and launch it within 1 month. The goal was to keep the spec minimal. But the scope of the project grew and 1 month turned into 2 which turned into 3. At this point I still wasn't happy with it.

I had spent 3 months building a custom backend in Laravel. On the front end I used Nuxt. But I regretted spending that much time building a platform when I could have used that time on marketing and research of conferences. I lost interest again.

About a month later I picked it up again. I scrapped the platform entirely and started from fresh. This time I cut all but the most basic features. I wanted a list of conferences that could be filtered by location and topic. It took about 2 weeks from start to finish.

## Learnings

I learned a great deal from failing to finish the project twice. Both times I set myself up for failure in the beginning.

The second time around I spent a lot of time on building the platform because that's what I find comfortable doing. But I do enjoy things like design, marketing and improving a project over time as well. I usually never get to that part before I lose interest though.

Keeping the scope of a project simple is a very hard thing to do. Over time there are always small features that creep in. This happened to me on the third iteration as well. But this time I was strict about choosing features. If I came up with an improvement I could implement in 1 hour or if it was integral to the core idea then I would build it. If it didn't match those criteria it could wait.

I think losing interest in a side project before it's finished is a common problem for many people. But I've found that staying focused on finishing a good, but very simple product, mitigates this problem.

Launching something is fun. Iterating and improving it over time is satisfying. And doing it this way I've managed to keep my interest and not get overwhelmed by missing features.

## The tech stack

I mentioned that I simplified the third version of Conference HQ. A part of this process was simplifying the tech stack.

Originally it consisted of a Laravel API and a Nuxt frontend. I'm primarily a front end developer so I switched the Laravel API out with Airtable. For the frontend I switched from Nuxt to Gridsome.

### Airtable

Airtable is best described as Google Sheets on steroids. In many ways it's simpler than Google Sheets but it does things like asset handling very well.

In my base I currently have the following tables:

-   Conferences
-   Topics
-   Themes
-   Currencies
-   Cities
-   Countries
-   Regions

Topics are specific tags like Vue, PHP or Testing. Themes are groups of topics like Frontend for Vue, React, JS etc.

Each conference is connected to a city. I add cities as I go along. So if I'm adding a conference that takes place in a city I haven't added yet, I add it then.

Cities are connected to countries and countries to regions. This allows me to filter conferences by city, country or region.

Currencies consist of a currency code (USD, CAD), a symbol (\$, €) and an exchange rate to USD. The reason I have this table is to show prices in the original currency but add filtering by price in the future.

At some point I will write a more detailed article about the pros and cons of using Airtable as a backend.

### Gridsome

Gridsome is a static site generator for Vue. I love Vue so the choice was between a Vue SPA, Nuxt or Gridsome.

A marketing strategy for me is SEO so a single page application wasn't the optimal choice. I've used Nuxt before, even on the second version of Conference HQ, so that was my first choice.

Unfortunately I didn't find a good way to integrate it with Airtable. This is because of a limitation with the Airtable API. To authenticate with Airtable I have a private API key. This means I have to call the API from a server and never from the frontend.

Instead I was left with Gridsome. It turns out that it's easy to pick up and it was overall a good experience. The way it integrates with Airtable is by fetching all data when I deploy the site. It then generates all the static pages from that data.

An added benefit of Gridsome is that it's easy to have multiple data sources. In the future it would be simple to add a blog using something like Contentful or Netlify CMS.

### Netlify

Netlify is a great tool for hosting static sites. It integrates with Github. When I finish a feature I create a pull request. Netlify checks it and automatically deploys when it's been merged.

I can deploy the site from my machine by running `gridsome build` and `netlify deploy`.

A little while ago Netlify launched [Netlify Analytics](https://www.netlify.com/products/analytics/), so I don't have to deal with Google Analytics anymore.

## Goals

I didn't set any explicit goals for the project before starting, but I'll try to come up with some numbers.

### Conferences

The first goal is **300 conferences**. This is the minimum number I think the site needs to hit before it can really start being useful. I've compiled a list of about 350 conferences that are currently stored in a spreadsheet. At the time of writing this, I have close to 100 conferences on the site.

Up until now I've been adding new conferences as I stumbled upon them. I want this to be more structured. The plan is to pick 1 topic at a time and then try to find as many conferences as possible related to that topic.

### Visitors

The first goal is **5000 visitors** per month. I'm aware that I need to add more conferences for this to be feasible but it's a good number to aim towards.

I'll explain how I plan to attract visitors in the marketing section of this article.

### Revenue

Revenue isn't the main priority in the beginning. But I would like to generate some revenue in the future. For now I'm focusing on making the site better.

The first goal is **\$500** per month. This isn't a number that can sustain me, but it would allow me to spent more time on building the site.

I'll talk more about ideas for revenue streams later in the article.

## Marketing strategy

I've got several ideas for marketing strategies.

### Building in public

The first idea, is being open and transparent about what I'm working on. I want to regularly give updates on my blog, on [Indie Hackers](https://www.indiehackers.com/product/conference-hq) and on [Makerlog](https://getmakerlog.com/products/conference-hq). This has already resulted in some traffic, some feature suggestions as well as suggestions for conferences to add to the site.

### SEO

The primary marketing strategy for the long term is search engine optimisation.

I want to target keywords like 'best design conferences in 2020'. But I think a more feasible strategy will be to target long tail phrases like 'react conferences in toronto'.

The site structure is built with this goal in mind. Right now I have the following url structures:

-   `/topic/name`
-   `/theme/name`
-   `/city/name`
-   `/country/name`
-   `/region/name`

Each of these pages have a unique meta description. At some point I'll add more detailed descriptions for each page, so there is text content on them. For a city page this could be a description of the tech or design scene in that city.

Another plan is to add more specific sub pages. This could be combining a topic and a city into a single page. A URL for that page could be `/city/name/topic/name`. I do see this as more useful when I have more conferences on the site.

This is inspired by [NomadList](https://nomadlist.com/). You can read more about how successful that strategy was on [Marketing Examples](https://marketingexamples.com/seo/dominate-long-tail-keywords).

#### Link Building

I haven't come up with a specific plan for building links yet. But I think it's an advantage that I've split the page up into small sub pages. That way I can find a blog related to Vue and try to get a link on to that site. Similar I can find a blog about tech news for a city and try to get a link on to that site.

### Twitter

Although not the primary marketing tool for Conference HQ I think it can be an important tool. I can share news about conferences being announced, opening up Calls for proposals or selling tickets. I can also interact with organisers and speakers who might have suggestions for the site.

## Potential Revenue Streams

I have given a lot of though to potential revenue ideas, I don't think it makes sense to implement any of these ideas before the site has a steady traffic. I'm cautious about implementing to many of these ideas because I want to stay focused on making a good and useful site for the users.

### Featured conferences

Many popular job board sites make money by displaying featured jobs at a premium price. Similarly I could sell the premium space at the top of each page. I like this idea a lot because visitors would be people who are interested in going to a conference, therefore making it a good way to advertise for the conferences themselves.

Additionally each topic and city has it's own page so if you are running an Angular conference in Paris you could choose to advertise on only those pages.

I would most likely offer additional incentives like another card design in the grid so it stands out. Another possibility is to allow organisers to write about the conference or add testimonials.

### Advertisements in the conference grid

An idea is to add text advertisements in the grid. The trick here is to make them subtle so they don't stand out too much.

This could be useful for companies who can target users interested in a specific topic or theme.

### Conference affiliates

I've seen some conferences offer an affiliate program for ticket sales. Some offer up to 30% of the ticket price. For a $1000 dollar conference that would be $300.

As with any other affiliate website I would want to make it clear that some links may be affiliate links.

### Travel affiliates

The last idea I've come up with for now is to add affiliate links to plane tickets, hotels or transportation around the city. I'm not sure how useful this would be for the visitors as I doubt they would buy it right away, without first talking to their boss or consider it for some time.

If I want to go through with this idea it might be useful to spend time making deals with specific hotels or carriers in each city.

## What's next

I try to avoid planning far into the future, but I've got one big feature that will be implemented soon. That is search and filtering.

Right now you can filter conferences by going to one of the subpages. But I want a dedicated search page with the possibility to add filters. A filter could be a location or a topic. What this allows is to search for multiple topics in the same location as an example.

I also want to add filters for things like dates and pricing.
