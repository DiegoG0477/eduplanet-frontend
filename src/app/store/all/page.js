import React from 'react'
import ViewAll from '@/components/organisms/VIewAll'

export default function AllBooks() {
    return (
        <div>
            <ViewAll typeData={"book"} apiRoute={"/materials"} route={"/store/book/"}/>  
        </div>
    )
}