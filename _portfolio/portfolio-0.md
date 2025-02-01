---
title: "Agora Vote"
excerpt: " Agora Vote is a voting platform that ensures end-to-end verifiability, enabling transparent and auditable elections. Unlike traditional voting systems, AgoraVote allows individuals to maintain personal profiles, fostering a long-term history of participation. <br/>"
collection: portfolio
---

Agora Vote is an early-stage MVP, developed by a team of three, where I am responsible for backend design.

## Motivation

A previous iteration of this product, built around 2 years ago, was a Python-based web application that only allowed users to participate in elections upon invitation. In this iteration, we are expanding its scope by integrating social elements—enabling users to share their thoughts, discuss policies, and contribute to a community-driven voting ecosystem.


## Backend Design & Tech Stack:


Golang for Core Services – Used for its concurrency model, which helps handle high-throughput user iteraction events efficiently.

ElectionGuard (C++ / Rust) – open source code that handles end-to-end verifiable encryption.

Microservices Architecture – ElectionGuard(3rd party code) is implemented in C++/Rust, while the core backend is in Golang - microservices approach to ensures ElectionGuard can run as an isolated service.

PostgreSQL – Chosen for its ACID compliance, ensuring that vote data is consistent and durable.

Kafka for Event Processing – Used to manage real-time updates on election progress and user activity without blocking main processes.