function smallestMissingPositiveInteger(A)
    {
        let n = A.length;
  
        let present = new Array(n+1);
        
        
        for(let i=0;i<n+1;i++)
        {
            present[i]=false;
        }
        
        for (let i = 0; i < n; i++)
        {
            if (A[i] > 0 && A[i] <= n)
            {
                present[A[i]] = true;
            }
        }


        for (let i = 1; i <= n; i++)
        {
            if (!present[i])
            {
                return i;
            }
        }
        return n + 1;
    }


    module.exports = smallestMissingPositiveInteger;






