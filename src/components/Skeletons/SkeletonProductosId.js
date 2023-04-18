import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonProductosId = () => {


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Skeleton className="producto-imagen" />
                </div>
                <div className="col-md-6 producto-info">
                    <h2 className="producto-titulo"> <Skeleton /> </h2>
                    <p className="producto-precio"><Skeleton /></p>
                    <p className="producto-precio"><Skeleton /></p>
                    <p className="producto-categoria"><Skeleton /></p>

                    <div className="d-flex">
                        <div className="cantidad d-flex">
                            <Skeleton height={29} width={29} className="btn-cantidad" />
                            <Skeleton height={38} width={60} className="form-control d-inline-block" />
                            <Skeleton height={29} width={29} className="btn-cantidad" />
                        </div>
                        <Skeleton height={38} width={151} className="btn-success" />
                        <Skeleton height={38} width={145} className="btn-warning" />
                    </div>
                </div>

            </div>
        </div>
    )

}

export default SkeletonProductosId