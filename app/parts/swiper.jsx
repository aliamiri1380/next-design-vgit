"use client"
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { render_children } from '@/utils';
import { useEffect, useState } from 'react';


export default (props) => {
	return (
		<Swiper onSlideChange={(e) => props.onSlideChange ? props.onSlideChange(e.activeIndex) : ''} onSwiper={props.onSwiper} modules={props.pagination ? [Pagination] : []} className={`rounded-lg my-2 ${props.className ?? ''}`} pagination={{ clickable: true }} spaceBetween={props.spaceBetween ?? 0} slidesPerView={props.slidesPerView ?? 'auto'} style={{ 'padding': props.disablePaddingContainer ? '' : '0 1pc 0 1pc' }}>
			{render_children(props.children, props.flat).map(r => {
				return <SwiperSlide style={{ 'maxWidth': props.autoWidth ? '' : 'fit-content', 'padding': `0 ${props.disablePadding ? '0' : props.padding ?? '5px'}` }}>{r}</SwiperSlide>
			})}
		</Swiper>
	);
};