import React from 'react'
import ViewAll from '@/components/organisms/VIewAll'

export default function AllBlogs() {
    return (
        <div>
            <ViewAll typeData={"blog"} route={"/blogs/"} apiRoute={"/blogs"}/>  
        </div>
    )
}