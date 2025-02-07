from fastapi import FastAPI, Query, HTTPException
import httpx

app = FastAPI()

@app.get("/api/classify-number")
async def classify_number(number: str = Query(..., description="Number to classify")):
    try:
        num = float(number)  # Ensure numeric input

        response = {
            "number": num,
            "is_prime": is_prime(int(num)) if num.is_integer() else False,
            "is_perfect": is_perfect(int(num)) if num.is_integer() else False,
            "properties": get_properties(int(num)) if num.is_integer() else [],
            "digit_sum": sum(map(int, str(abs(int(num))))) if num.is_integer() else None,
            "fun_fact": fetch_fun_fact(int(num)) if num.is_integer() else "No fact for floats"
        }

        return response

    except ValueError:
        raise HTTPException(status_code=400, detail={
            "number": number,
            "error": True
        })


def is_prime(n: int) -> bool:
    if n < 2:
        return False
    return all(n % i != 0 for i in range(2, int(n**0.5) + 1))


def is_perfect(n: int) -> bool:
    return n > 0 and sum(i for i in range(1, n) if n % i == 0) == n


def get_properties(n: int):
    properties = ["odd" if n % 2 else "even"]
    if sum(int(d)**len(str(n)) for d in str(abs(n))) == n:
        properties.insert(0, "armstrong")
    return properties


def fetch_fun_fact(n: int) -> str:
    url = f"http://numbersapi.com/{n}/math"
    try:
        response = httpx.get(url)
        return response.text if response.status_code == 200 else "No fact found"
    except Exception:
        return "Error fetching fact"
