# README

## This app is contructed under the instructions of the following tutorial

[Tutorial LINK](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend)

## Login system(using bcrypt)

[Tutorial LINK](https://medium.com/swlh/react-reactions-cfdde7f08dff)

## Deployment
By far I've tried three different ways to do it, but still facing some obsticles.
I really hope someone could help me figure out what's going on.
For those willing to do so, here's some useful tutorials I've gone through and may help you when digging into this field.

1. deploy from local to VM with capistrano
(The way I prefer most and the way we got to master if we wanna make this big.)
[Tutorial LINK-1](https://weilihmen.medium.com/實作rails上架狗哥雲端-gce-1-9fdc1ae1a2e0)
[Tutorial LINK-2](https://weilihmen.medium.com/實作rails上架狗哥雲端-gce-2-940fcff2a004)
[Tutorial LINK-3](https://weilihmen.medium.com/實作rails上架狗哥雲端-gce-3-8762c8b825bf)

2. deploy from local to google app engine with gcloud
3. deploy from google cloud shell with gcloud
(Method 2 and 3 are quite the same and there's plenty somewhat clear tutorials out there. Since I didn't find one that really impressed me, I'd rather not put one.)

## What has been done
1. database: I've set up schema for 'image' and 'user' as well as their CRUD methods
2. basic routings are done
3. some rather ugly pages are being set up, which needs some help to make it work.

## Project INFO

frame: react on rails
project name: graffiti (for further deployment use)

versions for enviorment setup:
(for further information, check the Gemfile and Gemfile.lock)
    Ruby: '2.5.3'
    Rails: '5.2.6'
    Bundler: '1.17.3' 

## How to set up

1. clone the repository
2. yarn install
3. bundle install
4. cd to the <repo>
5. rails s
(under http://localhost:3001)

## I'm as well still a rookie of this field, so feel free to provide your advises. Thank you.
## Happy Coding!



## Other Useful Links
### Docker
[Introducing Docker](https://cwhu.medium.com/docker-tutorial-101-c3808b899ac6)
[Docker Manual](https://philipzheng.gitbook.io/docker_practice/image/pull)