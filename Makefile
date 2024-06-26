# Run a production and a development containers
up:
	docker compose up -d

# Build the containers
build:
	docker compose build


# Run a development containers
dev:
	docker compose up dev -d

# Run a production containers
prod:
	docker compose up prod -d


# Stop all containers
down:
	docker compose down

# Run the containers
run:
	docker compose run
