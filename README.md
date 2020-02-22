# Simple CMS

## Overview:

This is a simple CMS. You can build pages and manage their content.

## Features:

Admin Panel features:

    - Media uploader for images
    - Make blocks with different type and content
    - Make pages and attach blocks to it
    - Manage the Footer and the Navigation of the site

Client features

    - Browse all pages made from the CMS

## Setup:

1. Create new MYSQL database.
1. Set .env (copy the .env.example)
1. (backend) cd backend && composer install && php artisan migrate:fresh --seed && php artisan serve
1. (frontend) cd front-end && npm i && ng s --o

## Documentation:
[front-end](docs/front-end-docs.md)
[back-end](backend)

## Plan to develop:

- [x] 01/25 - 01/26 - Auth and the private routes for the admin
- [x] 02/01 - 02/02 - Media uploader
- [x] 02/08 - 02/09 - Pages CRUD, Blocks CRUD, Header and Footer Crud
- [x] 02/15 - 02/16 - Visual representation of the site

## To Do list:

1. Style Login Form
1. Admin to be able to add new admins
1. Server side rendering for the client part.
1. Make themes for the admin panel ?
1. (php) Refactor the authentication strategy ?
1. Services Block ?
