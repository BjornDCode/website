---
title: Using Airtable as a backend
slug: using-airtable-as-a-backend
series: conference-hq
published_at: 2019-09-22
---

I recently launched the first version of [Conference HQ](http://conferencehq.io). An interesting part of the project is the backend which is powered by Airtable. I originally built my own API in Laravel but I had dropped the project at that point. I'll come back to that later.

## What is Airtable

Airtable is a mix between a spreadsheet and a database. It's simpler than Firebase but has some convenient features like asset handling that makes it better for managing content than Google Sheets.

At the core of Airtable are bases. It's the equivalent of a database or a spreadsheet. Inside the base you have tables. Inside tables is where the content lives. These are called records.

![Airtable](/images/airtable.png)

Where Airtable really shines are the field types you can have for each column in a table. Standard options like text, number and date fields are available. But more advanced fields are available as well.

You can have a email, phone number or url field if you are storing data about customers. Rating, duration, barcode, select and attachment fields are also available. The attachment field can be used to store images or files to display or download.

Lastly you can link to other records or read a value from another record and use it in a formula.

## Why I chose Airtable for Conference HQ

I had originally built a Laravel API as the backend. But for various reasons I dropped the project for a while and when I revived it I wanted a simpler solution.

Airtable was the right solution for that. At it's core, Conference HQ is a list of conferences. A custom API solution was overkill and instead of spending time maintaining the API, Airtable allowed me to focus on other things. I would estimate that I've spend around 3 hours setting up the base itself.

It's easy to set up, especially if you have experience working with databases. The asset handling is convenient for Conference HQ because I store a logo for each conference. It's also nice not having to worry about setting up and maintaining the server.

The free plan is sufficient for most small sites.

## When to use Airtable

I would recommend using Airtable for list or directory sites. This could be a job board like [Cryptocurrency Jobs](https://cryptocurrencyjobs.co/), a database like [Nomad List](https://nomadlist.com) or a directory like [Made with Vue.js](https://madewithvuejs.com).

If you plan on adding other content like blog posts, I would still recommend using Airtable for the list part. Using a static site generator like Gridsome or Gatsby will allow you to fetch content from difference sources.

## Working with Airtable's API

After creating a base on Airtable, they auto generate API documentation for that base. This adapt as you add or remove tables or fields from the base.

There is an official [JS client](https://github.com/Airtable/airtable.js) that can be utilised. If you are using another language to power the site you can hit the endpoints directly.

Authentication is done with a token. Unfortunately it's not possible to make endpoints public. This means the API has to be called from a server, to avoid the token being public. This is the reason I chose to use a static site generator over a SSR framework like Nuxt.

The API has a rate limit of 5 requests per second. Unless you have a site with a lot of traffic this should be sufficient. Using a static site generator mitigates this problem as it fetches all data when the site is deployed.

Working with the Airtable API won't be the same as working with a custom API. You don't have as much freedom when it comes to validation and connecting models through relationships.

An example is that you can't have a 1 to 1 or a 1 to many relationship. Relationships are always many to many. Another example is that you can't automatically generate slugs. I have set up a formula that removes special characters from the conference names and turn it into dashes or an empty string.

But I haven't found anything that I couldn't work around yet and considering the time saved by using Airtable I think it's worth it for simple sites.

## Frontend

Because of the API authentication problem, I chose [Gridsome](https://gridsome.org/) as a static site generator.

Originally I wanted to use [Nuxt](https://nuxtjs.org/) and use server side rendering. But the way data Nuxt fetches data from an API is through a method called [asyncData](https://nuxtjs.org/guide/async-data). This method fetches data on the server the first time it's run, but when the user navigates to other routes it will be called from the client. This would expose my Airtable API key.

Gridsome fetches all data when I run the `gridsome build` command. I do that when I deploy the site. It then generates every page into a static html file which is served.

An advantage of using Gridsome (or [Gatsby](https://www.gatsbyjs.org/) for React), is that you can have multiple data sources. That means I can create a blog using Contentful or Netlify CMS and fetch the data through Gridsome as well.

Gridsome is still young and I ran into some caveats. The biggest one is search. This feature hasn't been launched on Conference HQ yet, but I'm currently implementing it.

There are some search capabilities available in Gridsome but they are limited. Instead I'm using [FlexSearch](https://github.com/nextapps-de/flexsearch). I'll write another article with more details when the search and filter features have been shipped.

## Handling forms

A feature I want to add to the site in the future is the ability for users to add conferences. For this I've come up with two solutions.

I can either create a [Typeform](https://www.typeform.com/) or use [Netlify Forms](https://www.netlify.com/products/forms/). Since the site is already hosted on Netlify I'll most likely go with that solution.

In order to store the fetched content in Airtable I'll use Zapier. Zapier has integrations with both Netlify and Typeform as well as Airtable.

## Conclusion

For a long time I've had a habit of trying to over-engineer my projects. This has always led me down a path where I spent a lot of time writing code that never see the light of day. Using Airtable saved me weeks of work creating a backend and allowed me to spend that time on adding features and content to the site instead. Airtable is not a viable solution for any site but if you want to quickly launch a project or test out an idea it's really solid.
