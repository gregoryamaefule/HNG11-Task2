from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

def is_prime(n: int) -> bool:
    """Check if a number is prime"""
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def is_perfect(n: int) -> bool:
    """Check if a number is a perfect number"""
    if n < 1:
        return False
    return sum(i for i in range(1, n) if n % i == 0) == n

def is_armstrong(n: int) -> bool:
    """Check if a number is an Armstrong number"""
    digits = [int(d) for d in str(n)]
    power = len(digits)
    return sum(d ** power for d in digits) == n

def get_digit_sum(n: int) -> int:
    """Calculate the sum of digits of a number"""
    return sum(int(d) for d in str(n))

async def get_fun_fact(n: int) -> str:
    """Fetch a fun fact from Numbers API"""
    url = f"http://numbersapi.com/{n}/math?json"
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url)
            if response.status_code == 200:
                data = response.json()
                return data.get("text", "Fun fact unavailable")
    except Exception:
        return "Fun fact unavailable"
    return "Fun fact unavailable"

@app.get("/api/classify-number")
async def classify_number(number: str = Query(..., description="Number to classify")):
    """Classify a number and return its mathematical properties"""
    if not number.isdigit():
        return JSONResponse(status_code=400, content={"number": number, "error": True})

    num = int(number)
    properties = []
    
    if is_armstrong(num):
        properties.append("armstrong")
    properties.append("odd" if num % 2 else "even")

    fun_fact = await get_fun_fact(num)

    return {
        "number": num,
        "is_prime": is_prime(num),
        "is_perfect": is_perfect(num),
        "properties": properties,
        "digit_sum": get_digit_sum(num),
        "fun_fact": fun_fact
    }
