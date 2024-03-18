nums = [-1,0,1,2,-1,-4]
l=[]
for i in range(len(nums)-2):
    for j in range(i+1,len(nums)-1):
        for k in range(j+1,len(nums)):
            if nums[i]+nums[j]+nums[k]==0:
                target = [nums[i],nums[j],nums[k]]
                target.sort()
                if target not in l:
                    l.append(target)
                continue
print(l)