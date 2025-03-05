import { Grid, Link, Typography, Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" className="bg-black text-gray-300 mt-10 py-10">
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-3 text-white font-semibold" variant="h6">
              Company
            </Typography>
            {["About", "Blog", "Jobs", "Press", "Partners"].map((item) => (
              <Typography key={item} variant="body2" className="hover:text-white cursor-pointer">
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-3 text-white font-semibold" variant="h6">
              Solutions
            </Typography>
            {["Marketing", "Analytics", "Commerce", "Insights", "Support"].map((item) => (
              <Typography key={item} variant="body2" className="hover:text-white cursor-pointer">
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-3 text-white font-semibold" variant="h6">
              Documentation
            </Typography>
            {["Guides", "API Status"].map((item) => (
              <Typography key={item} variant="body2" className="hover:text-white cursor-pointer">
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-3 text-white font-semibold" variant="h6">
              Legal
            </Typography>
            {["Claim", "Privacy", "Terms"].map((item) => (
              <Typography key={item} variant="body2" className="hover:text-white cursor-pointer">
                {item}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Divider */}
        <Box className="border-t border-gray-600 mt-8 pt-6 text-center">
          <Typography variant="body2" className="text-gray-400">
            &copy; {new Date().getFullYear()} Fyndit. All rights reserved.
          </Typography>
          <Typography variant="body2" className="text-gray-400">
            Made with ❤️ by Me.
          </Typography>
          <Typography variant="body2" className="text-gray-400">
            Icons made by{" "}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
