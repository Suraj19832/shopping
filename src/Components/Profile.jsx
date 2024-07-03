import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate()
  const handleLogOut = () =>{
    localStorage.removeItem("isLoggedIn");
    navigate('/signin')
  }
  let userData = JSON.parse(localStorage.getItem("user"));
  return (
    <Box sx={{ flexGrow: 1, mt: 14 }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ position: "absolute", right: 25, background: "brown" }}
        size="medium"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png"
              alt="Profile"
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
            <Typography variant="h6" sx={{ mt: 1 }}>
              {userData.firstName + " " + userData.lastName}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Email: {userData.email}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="h6">User Details</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Age: 22
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Gender : Male
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Address: Purulia, West Bengal
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              size="medium"
            >
              Edit Profile
            </Button>
          </Box>
        </Grid>
      </Grid>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <Typography variant="h6" sx={{ marginBottom: 5, fontWeight: 800 }}>
            Most Viewed
          </Typography>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://images.unsplash.com/photo-1536588975365-208954f69347?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Bag-Packs
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Soft-Cort
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://images.unsplash.com/photo-1501808503570-36559610f95e?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Smart-Phones
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Galaxy Mobiles
                </h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Perfumes
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Boots
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-bottom w-full h-full block"
                  src="https://images.unsplash.com/photo-1562687848-c1664eff566d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Sandals
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Walkers
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Watches
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Fossil
                </h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Smart-Watch
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://images.unsplash.com/photo-1605516384564-6e30d6b4f235?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Shirts
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Profile;
