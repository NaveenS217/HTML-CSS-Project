from django.urls import path
from .views import get_amazon, get_journey, get_operations, get_revenue

urlpatterns = [
    path("performance/", get_amazon),
    path("journey/", get_journey),
    path("operations/", get_operations),
    path("revenue/", get_revenue),
]
