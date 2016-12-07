json.extract! car, :id, :created_at, :updated_at, :name, :description, :producer, :presence, :release, :cost
json.url car_url(car, format: :json)