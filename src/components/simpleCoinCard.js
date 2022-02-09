import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const getCoinData = (title, coins) => {
    var indx = coins.findIndex((data) => data.title === title)
    if(indx === -1) {
        return ['0', '0.00', '-']
    }
    const data = coins[indx]
    return [data.currentValue, data.changeRate, data.changeStatus]
    
}

export default function SimpleCoinCard(props) {
    const {title} = props;
    const img = require('../images/coins/' +  String(title).trim().toLowerCase().replace(' ', '-') + '.png');

    const coins = useSelector((state) => state.coins);
    const [currentValue, changeRate, changeStatus] = getCoinData(title, coins)

    const cardClick = () => {
        console.log(title);
    }

    return <div>
        <Card sx={{width: 200, height: 250}} >
            <CardActionArea onClick={cardClick} >
                <CardMedia className="h-32 w-32 mt-3"
                    component='img'
                    image={img}
                    alt={title}
                    sx={{objectFit: 'contain'}}
                />
                <CardContent >
                    <Typography variant='h5' component='div' sx={{fontWeight: 'bold', textAlign: 'center'}} >
                        {title}
                    </Typography>
                    <Typography sx={{textAlign: 'center'}}>
                        {'Current: $' + currentValue}
                    </Typography>
                    <Typography color={(changeStatus==='+' ? '#00bb00' : '#ff0000')} sx={{textAlign: 'center'}} >
                        {'Change: ' + changeRate + '%'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
}