import { Button, Form, Input, message } from 'antd'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from 'src/hooks'
import { createBlog } from 'src/services'

const AddBlogPage = () => {
  const {
    walletData: { address },
  } = useAppContext()
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onSubmitHandler = useCallback(() => {
    const values = form.getFieldsValue()

    const data = {
      ...values,
      address,
    }

    createBlog(data)
      .then((resp) => navigate('/'))
      .catch((err) => message.error(err.message))
  }, [form.getFieldsValue])

  return (
    <Form layout="vertical" form={form} onSubmitCapture={onSubmitHandler}>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'You must add title!' }]}
      >
        <Input placeholder="Write article title here ..." />
      </Form.Item>

      <Form.Item
        name="content"
        label="Content"
        rules={[{ required: true, message: 'You must add content!' }]}
      >
        <Input.TextArea
          rows={15}
          showCount
          maxLength={2000}
          placeholder="Write your awesome content here ..."
        />
      </Form.Item>

      <Form.Item>
        <Button className="mt-6" type="primary" htmlType="submit">
          Post new article
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddBlogPage
