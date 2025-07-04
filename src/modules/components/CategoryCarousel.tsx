import {Carousel} from "@mantine/carousel"
import CardCategory from "./CategoryCard";
import { useState } from "react";
import Task from "../models/Task";
import Category from "../models/Category";


interface CategoryCarouselProps {
    tasks?: Task[];
    categories?: Category[];
    //calculateCategoryProgress: (categoryId: number) => number;
}
  
export default function CategoryCarousel(props:CategoryCarouselProps)  {

    
    return (
      <Carousel slideSize="33%" slideGap="md" align="start" withControls>
        {props.categories?.map((category, index) => (
          <Carousel.Slide key={category.id}>
            <CardCategory
            title={category.category_name}
            progressValue={70}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    );
  }