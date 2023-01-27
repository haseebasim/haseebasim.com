---
title: Improving Development Flow in a Multi-Project Repo
date: '2023-01-18T11:18:55.646Z'
author: 'Osama Riaz'
featuredImage: https://ripeseed-landing-page.s3.amazonaws.com/hello-cold-world.jpeg
---

![Alt text](/images/about_img.png)

When working on a large project with multiple sub-projects, it's important to have a streamlined development flow to ensure that teams can work efficiently and effectively. In this blog post, we'll be discussing how we improved our development process for a recent project, which consists of four sub-projects all housed in a single repository. The main technologies used in the project were Vue, Prisma, GraphQL, Apollo, and TypeGraphQL.

## Problem

For the ease of readers we have divided this section into summarized and detailed sections

### Summarized version of the problems we are facing:

- Tedious process for setting up the repository and installing necessary packages for each sub-project
- Time-consuming and error-prone process of running a command to generate mutations.graphql and queries.graphql files, then manually copying and pasting them into other three sub-projects
- Issues with code formatting, as each developer has their own preferred formatting, leading to noise when reviewing code and causing delays and frustration for frontend and backend teams.

### Detailed version

Before we made changes to our development flow, the process of getting set up after cloning the repository was quite tedious. For each sub-project, we had to individually install all necessary packages. The backend development process also had its own set of challenges. We were using TypeGraphQL to generate a `schema.gql` file, which would contain all of the types, queries, and mutations for the project. Every time we made changes to the code, we had to run a command to generate the `mutations.graphql` and `queries.graphql` files. The command we used was `amplify-graphql-docs-generator --schema src/schema.gql --output src/graphql/ --language graphql --separateFiles true --maxDepth 6`. Once we are done with the required changes we then had to manually copying and pasting these file to other three sub-projects.

This process of generating these files and then manually copying and pasting them into the other three sub-projects that would be using the backend was extremely time-consuming and prone to errors. We often forgot to generate the files, or would accidentally move them to the wrong location. Additionally, there was an issue with code formatting. Each developer had their own preferred formatting, which resulted in noise when reviewing the code. Some developers had enabled auto-formatter on save, while others were not using anything. This caused a lot of back and forth between the frontend and backend teams, leading to delays and frustration.

## Solution

To solve the issues we were facing with our development flow, we decided to make a few changes. One of the first things we wanted to introduce was auto-formatting using Prettier. We knew that this would be possible by introducing a Git pre-commit hook. However, the challenge was that each sub-project had its own package.json file, and there wasn't a main package.json file. To fix this, the easiest and quickest solution was to introduce Yarn workspaces.

Yarn workspaces are a feature of Yarn that allows for sharing dependencies and a single yarn.lock file across multiple projects in a monorepo. This allows for a more efficient way of managing dependencies and reduces the need to repeat the installation process in each individual sub-project. With yarn workspaces, a main package.json file was created, which in turn enabled us to install packages once, across all the sub-project.

With a main package.json file in place, we moved forward with setting up the Git pre-commit hook. We added Husky for Git hooks and Prettier for formatting, as well as lint-staged to only format the files that were staged.

Here's an example of the content of our pre-commit file:

```
    #!/usr/bin/env sh

    .  "$(dirname -- "$0")/_/husky.sh"

    npx lint-staged
```

This setup allowed us to automatically format all of our code as soon as it was committed, ensuring that it adhered to a consistent style. This improved the code review process, as we no longer had to spend time on formatting issues.

After addressing the formatting issues, we moved on to fixing the problem of generating files and manually moving them to each sub-project. To do this, we again utilized a Git pre-commit hook. We decided to generate and copy files during the pre-commit process. Here's an example of our updated pre-commit file:

    #!/usr/bin/env sh
    .  "$(dirname -- "$0")/_/husky.sh"

    sed -i ''  's#@specifiedBy(url: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf")##g' backend/src/schema.gql

    cd backend/

    amplify-graphql-docs-generator --schema src/schema.gql --output src/graphql/ --language graphql --separateFiles true --maxDepth 6

    git add .

    npx lint-staged

This solution worked well for the most part, but we soon realized that it had a major flaw. By adding all the generated files to the staging area with `git add .` in our pre-commit script, we were not allowing developers to select specific files to include in their next commit. This is generally considered as bad practice as it would not let developer to carefully select the files they want to commit.

We came up with a solution to replace `git add .` with `git add file1 file1 ...`, but this presented a new problem. We realized that we didn't need to push these queries and mutation files to Git as they were only used to help developers. Instead of replacing `git add .` with `git add file1 file1 ...`, we added a new hook - post-merge, and moved the code generation part after the merge was completed. We also added these queries and mutation files to the .gitignore file. This further reduced noise during pull request reviews. In addition to the post-merge hook, we also added post-checkout which also generated these queries and mutations based on the code of that particular branch, ensuring that the developers always had access to the necessary files.

## Conclusion

In this blog post, we discussed how we improved the development flow in a large multi-project repository. By making a few quick changes, we were able to streamline the process of getting set up after cloning the repository and automate the generation and copying of necessary files. These changes led to a more efficient and effective development process, and allowed us to focus on building the project itself.
It's always a good practice to regularly evaluate your development process, and make improvements where necessary. Even small changes can have a big impact on the overall efficiency and effectiveness of the team.
