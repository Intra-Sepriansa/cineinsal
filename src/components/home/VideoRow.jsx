import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VideoCard from '../common/VideoCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoRow = ({ title, videos }) => {
  return (
    <Box sx={{ mb: 4, position: 'relative', '&:hover .swiper-button-prev, &:hover .swiper-button-next': { opacity: 1 } }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          px: { xs: 2, md: 6 },
          fontWeight: 600,
          color: '#e5e5e5',
          fontSize: { xs: '1.1rem', md: '1.5rem' },
          '&:hover': { color: 'white', cursor: 'pointer' }
        }}
      >
        {title}
      </Typography>

      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={8}
          slidesPerView={2}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 8,
            },
          }}
          style={{ overflow: 'visible' }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} style={{ overflow: 'visible' }}>
              <VideoCard video={video} />
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-prev" style={{ 
            color: 'white', 
            left: '-3%', 
            opacity: 0, 
            transition: 'opacity 0.3s',
            height: '100%',
            top: '22px',
            width: '4%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}></div>
          <div className="swiper-button-next" style={{ 
            color: 'white', 
            right: '-3%', 
            opacity: 0, 
            transition: 'opacity 0.3s',
            height: '100%',
            top: '22px',
            width: '4%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}></div>
        </Swiper>
      </Box>
    </Box>
  );
};

export default VideoRow;
