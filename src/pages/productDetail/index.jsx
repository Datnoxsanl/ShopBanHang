import {  useParams,Link } from "react-router-dom";
import useFetching from "../../customhooks/useFetching";
import { getProductDetailSlug } from "../../services/product";
import {  Button, Row, Col, InputNumber, Form } from "antd";
import ImageGallery from "react-image-gallery";
import currency from "../../helper/format";
import "react-image-gallery/styles/scss/image-gallery.scss";

const { VITE_BASE_API_URL } = import.meta.env;
import './product.scss'
export default function ProductDetail() {
  const param = useParams();
  const { data, setData, pagingation, setPagination, loading } = useFetching(
    () => {
      return getProductDetailSlug(param.slug);
    }
  );

  let images = data?.attributes?.image?.data?.map((item) => {
    let url = VITE_BASE_API_URL + item?.attributes?.url;
    return {
      original: url,
      thumbnail: url,
    };
  });
  images = images ? images : [];

//   let description  = data?.attributes?.description?.replaceAll('/upload', import.meta.env.VITE_BASE_API_URL + '/upload')
  let brand = <Link to="#">{data?.attributes?.idBrand?.data?.attributes?.name}</Link>
  let categories = data?.attributes?.idCategories?.data?.map(item=>{
      return <Link to="#" key={item?.id}>{item?.attributes?.name}</Link>
  })
  return (
    <>
      {data ? (
        <div className="product">
          <h1 className="title">{data?.attributes?.name}</h1>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <ImageGallery items = {images}></ImageGallery>
            </Col>
            <Col span={12}>
            <Row gutter={[30, 10]}>
                                <Col span={24}>Thương hiệu: {brand}</Col>
                                <Col span={24}>Danh mục: {categories}</Col>
                                <Col span={24} className='old-price'>{currency(data?.attributes?.oldPrice)}</Col>
                                <Col span={24} className='price'>{currency(data?.attributes?.price)}</Col>
                                <Col span={24}>
                                    <Form>
                                        <Form.Item
                                            name="quantity"
                                            label="Số lượng"
                                            initialValue={1}
                                        >
                                            <InputNumber
                                                className='quantity'
                                                min={1}
                                                max={data?.attributes?.quantityAvailable}
                                            ></InputNumber>
                                        </Form.Item>
                                    </Form>
                                </Col>
                                <Col span={24}>Còn lại: {data?.attributes?.quantityAvailable}</Col>
                                <Col span={24}>
                                    <Button type='primary' className='buy-btn' size='large'>Mua Ngay</Button>
                                </Col>
                            </Row>
            </Col>
          </Row>
        </div>
      ) : null}
    </>
  );
}
