# 2469. Convert the Temperature
def convertTemperature(self, celsius: float) -> List[float]:
        ans = []

        kelvin = celsius + 273.15
        ans.append(kelvin)
        Fahr = celsius * 1.80 + 32.00
        ans.append(Fahr)

        return ans

# 70. Climbing Stairs
def mySqrt(self, x: int) -> int:
        i = 0
        num =0
        while num <=x:
            num = i * i
            if num > x:
                return i -1
            elif num == x:
                return i
            i += 1