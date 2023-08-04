import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";



const ChannelCard = ({ channelDetail }) => (
  <Box sx={{
    boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center',
    alignItems: 'center', width: { xs: '356px', md: '320px' },
    height: '326px', margin: 'auto'
  }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'cennter',
        textAlign: 'center', color: '#fff'
      }}>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50px', height: '180px', width: "180px", }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)


export default ChannelCard