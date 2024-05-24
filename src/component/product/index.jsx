import { getProdcuts } from "../../services/product";
import useFetching from "../../customhooks/useFetching";
import { Row, Col, Card } from "antd";
import Link from "antd/es/typography/Link"
const {VITE_BASE_API_URL } = import.meta.env;
const { Meta } = Card;
function ProductList(props) {
  const { data, setData, pagingation, setPagination, loading } =
    useFetching(() => {
      return getProdcuts(1, 10, "price");
    }, []);

  return (
    <>
      <Row gutter={[20, 10]}>
        {data?.map((items) => {
          let imgUrl =
          VITE_BASE_API_URL + items?.attributes?.image?.data[0]?.attributes?.url
          let tilte = items?.attributes?.name;
          let description = items?.attributes?.description;
          return (
            <Col span={6} key={items?.id}>
              <Link>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={imgUrl}
                    />
                  }
                  loading={loading}
                >
                  <Meta
                    title={tilte}
                    description={description?.substring(0,50)+'..'}
                  />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default ProductList;
