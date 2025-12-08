import json
from django.http import JsonResponse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

def load_json(filename):
    json_path = BASE_DIR / "data" / filename
    with open(json_path, "r") as f:
        return json.load(f)

def get_amazon(request):
    return JsonResponse(load_json("amazonPerformance.json"), safe=False)

def get_journey(request):
    return JsonResponse(load_json("customerJourney.json"), safe=False)

def get_operations(request):
    return JsonResponse(load_json("operations.json"), safe=False)

def get_revenue(request):
    return JsonResponse(load_json("revenue.json"), safe=False)


# import json
# from django.http import JsonResponse
# from pathlib import Path

# BASE_DIR = Path(__file__).resolve().parent.parent  # move up to app root

# def load_json(filename):
#     json_path = BASE_DIR / "analytics" / "data" / filename
#     with open(json_path, "r") as f:
#         return json.load(f)

# def get_amazon(request):
#     return JsonResponse(load_json("amazonPerformance.json"), safe=False)

# def get_journey(request):
#     return JsonResponse(load_json("customerJourney.json"), safe=False)

# def get_operations(request):
#     return JsonResponse(load_json("operations.json"), safe=False)

# def get_revenue(request):
#     return JsonResponse(load_json("revenue.json"), safe=False)
