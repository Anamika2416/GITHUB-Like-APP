export const getUserProfileAndRepos = async (req, res) => {

    const {username} = req.params;
    try{
        // 60 requests per hour , 5000 requests per hour for authenticated requests
      //1:48:45 - read about rate -limits for the rest api

        const userRes = await fetch(`https://api.github.com/users/${username}`,{
            headers:{
               authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
          });
          const userProfile = await userRes.json();
   
          const repoRes = await fetch(userProfile.repos_url,{
            headers:{
                authorization: `token ${process.env.GITHUB_API_KEY}`,
             },
          });
          const repos = await repoRes.json();
          res.status(200).json({userProfile, repos});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};