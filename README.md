# social-toolkit
An open source, component and utilities library for social features of websites.

## Overview
This toolkit has been designed to make frontend social features as accessible as possible to developers. The features this toolkit covers should range from standard features you'd see in a social media application to social features you'd see in traditionally less social sites.

e.g. Spotify (collaborative lists, favouriting, following people, adding friends, etc.), Pocket (following people to start seeing articles they've saved), Etoro (comments, messages), Marketplaces (comments, messages).

This repository should also include robust examples of different usecases for the components.

## Technology Stack
- React https://reactjs.org/
- Next JS https://nextjs.org/
- Storybook https://storybook.js.org/
- Jest https://jestjs.io/
- Styled Components https://styled-components.com/
- React loading skeleton https://www.npmjs.com/package/react-loading-skeleton

## Core feature priorities
- Layout system (using every layout) https://every-layout.dev/
  - Stack
  - Box
  - Center
- Font system
- Theme rules: spacings, colors, shadows, borders
- Card
  - Should be an article element
  - Customisable: backgroundColor, border, shadow, padding, children
  - Optimisations: shadow to be image based for increased rendering speeds for large amounts of cards.
- Feed
- Author
  - Should contain an avatar, a username and a date.
  - Customisation: sizings, fonts, colors and orientation
- Verified
  - Should use em sizing so that it sizes correctly with the text adjacent to it.
  - Customisable: icon used, color
- Collaborators
- Date published (time ago) https://www.npmjs.com/package/javascript-time-ago
  - Should use callbacks to update in real time (e.g. now, 1s, 30s, 1m, etc)
  - Should take in unix timestamp
  - Customisable: Time ago format, fonts, color
- Like
- Comments
- Share
- Favourite
- Follow
- Online status
- Avatar
- Profile cover photo
- Profile avatar
- Emoji integrations
- Giphy integrations
- Menu buttons
- Menu items
- Read more
- Post editor https://draftjs.org/
- Image upload plugin
- Featured link plugin
- Twitter like poll plugin
- Rating system
- Social icons
- Share on social icons
- Twitter Feed
- Instagram images
- Tip Jar
- Meetup plugin (integration into events etc)
- Modal
