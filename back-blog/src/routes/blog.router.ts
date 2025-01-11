
import { Request, Response, Router } from 'express';

import { IStoreRecord } from 'src/store/store';
import { store } from '../store';


const blogRouter = Router();
const blogPath = 'blogs'

export default [blogPath, blogRouter]

blogRouter.get('/:address',async ({params: {address}}: Request, res: Response) => {
  const blogs = store.getUserBlogs(address)
  res.json({ blogs });
});

blogRouter.post('/',async (req: Request, res: Response) => {
  const {address, ...newBlog} = req.body as IStoreRecord<{address: string}>
  store.addNewBlog(address, newBlog)

  res.send({message: 'Logged out successfully', newBlog});
});