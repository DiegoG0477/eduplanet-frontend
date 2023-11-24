import FormAddBlog from "@/components/FormAddBlog"
function editBlogPage() {

  return (
    <div className='body_blog'>
      <FormAddBlog edit={true}/>
      </div>
  )
}

export default editBlogPage;