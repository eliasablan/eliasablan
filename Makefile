up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

run:
	docker-compose run app

dev:
	docker-compose run app npm run dev
