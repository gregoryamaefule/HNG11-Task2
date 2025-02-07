# Number Classification API

This is a FastAPI-based API that classifies numbers based on their mathematical properties and provides a fun fact using the Numbers API.

## Features
- Determines if a number is **prime** or **perfect**.
- Checks if a number is an **Armstrong number**.
- Identifies whether the number is **odd** or **even**.
- Computes the **digit sum** of the number.
- Fetches a **fun fact** from the Numbers API.
- Returns results in **JSON format**.

## API Specification

### Endpoint
**GET** `/api/classify-number?number=<number>`

### Example Request
```
GET http://your-api-url/api/classify-number?number=371
```

### Example Response (200 OK)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Example Response (400 Bad Request)
```json
{
    "number": "alphabet",
    "error": true
}
```

## Tech Stack
- **FastAPI** (Python Web Framework)
- **Uvicorn** (ASGI Server)
- **httpx** (HTTP client for fetching fun facts)
- **EC2** (Deployment)

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/number-classification-api.git
cd number-classification-api
```

### 2. Create a Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate    # Windows
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the API Locally
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Deployment (EC2)
To deploy on an EC2 instance:
```bash
nohup uvicorn main:app --host 0.0.0.0 --port 8000 > output.log 2>&1 &
```

## License
This project is licensed under the MIT License.

## Contributing
Feel free to submit issues or pull requests to improve this API!

## Author
**Gregory Amaefule**
