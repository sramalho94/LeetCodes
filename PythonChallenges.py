# 2469. Convert the Temperature
def convertTemperature(self, celsius: float) -> List[float]:
        ans = []

        kelvin = celsius + 273.15
        ans.append(kelvin)
        Fahr = celsius * 1.80 + 32.00
        ans.append(Fahr)

        return ans