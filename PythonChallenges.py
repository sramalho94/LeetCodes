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

# 145. Binary Tree Postorder Traversal
def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        answer = []
        def traverse(root):
            if root:
                traverse(root.left)
                traverse(root.right)
                answer.append(root.val)
        traverse(root)
        return answer

# 724. Find Pivot Index
def pivotIndex(self, nums: List[int]) -> int:

        # def helper(array):
        #     sum = 0
        #     for num in array:
        #         sum = sum + num
        #     return sum

        # for i, element in enumerate(nums):
        #     leftSlice = nums[0:i]
        #     rightSlice = nums[i + 1:len(nums)]
        #     if helper(leftSlice) == helper(rightSlice):
        #         return i
        # return -1 
        prefix_sum = [0]
        for num in nums:
            prefix_sum.append(prefix_sum[-1] + num)
        
        for i, num in enumerate(nums):
            if prefix_sum[i] == prefix_sum[-1] - prefix_sum[i+1]:
                return i
        
        return -1

# 118. Pascal's Triangle
def generate(self, numRows: int) -> List[List[int]]:
        arr =[]

        for i in range(numRows):
            row=[]
            for j in range(0,i+1):
                if j==0 or j==i:
                    row.append(1)
                else:
                    row.append(arr[i-1][j-1]+arr[i-1][j])
            arr.append(row)
        return arr
