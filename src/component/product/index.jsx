import { getProdcuts } from "../../services/product";
import useFetching from "../../customhooks/useFetching";
import { Row, Col, Card, Pagination } from "antd";
import Link from "antd/es/typography/Link";
const { VITE_BASE_API_URL } = import.meta.env;
const { Meta } = Card;
function ProductList(props) {
  const { data, setData, pagingation, setPagination, loading } =
    useFetching(() => {
      return getProdcuts(pagingation.page, pagingation.pageSize, "price");
    }, []);

  return (
    <>
      <Pagination
        pageSizeOptions={[6, 12, 18, 24]}
        ShowSizeChange={true}
        current={pagingation.page}
        total={pagingation.total}
        pageSize={pagingation.pageSize}
        onChange={(page, pageSize) => {
          setPagination({
            ...pagingation,
            page: page,
            pageSize: pageSize,
          });
        }}
      />
      <Row gutter={[20, 10]}>
        {data?.map((items) => {
          let imgUrl =
            VITE_BASE_API_URL +
            items?.attributes?.image?.data[0]?.attributes?.url;
          let tilte = items?.attributes?.name;
          let description = items?.attributes?.description;
          return (
            <Col span={6} key={items?.id}>
              <Link>
                <Card
                  hoverable
                  cover={<img alt="example" src={imgUrl} />}
                  loading={loading}
                >
                  <Meta
                    title={tilte}
                    description={description?.substring(0, 50) + ".."}
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
