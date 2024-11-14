import { Input } from "@nextui-org/input";
import Accordion from "../parts/accordion";
import { Spacer } from "@nextui-org/react";
import Button from '../parts/button'
import SearchInput from "../parts/search_input";
import LoadMoreBtn from "../parts/load_more_btn";
import Title from "../parts/title";

export default function Home() {
    return (
        <>
            <Spacer y={4} />
            <SearchInput />
            <Accordion isCompact items={[
                {"title": "نتیجه جستجوی شماره ۱", "content": 'توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱'},
                {"title": "نتیجه جستجوی شماره ۱", "content": 'توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱'},
                {"title": "نتیجه جستجوی شماره ۱", "content": 'توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱'},
                {"title": "نتیجه جستجوی شماره ۱", "content": 'توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱'},
                {"title": "نتیجه جستجوی شماره ۱", "content": 'توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱'},
                {"title": "نتیجه جستجوی شماره ۱", "content": 'توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱'},
                {"title": "نتیجه جستجوی شماره ۱", "content": 'توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱ + توضیحات جستجوی شماره ۱'},
            ]} />
            <LoadMoreBtn className="w-full" />
        </>
    );
}
