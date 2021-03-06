import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardWrapper, CardActionsWrapper, CardActionAreaWrapper, CardContentWrapper } from '../../shared/CardWrapper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { StyledBox } from '../../components';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    // maxWidth: 500,
  },
  media: {
    height: 150,
  },
});
const CardElement = (props) => {
  let priceRange = '';
  for (let i = 0; i < props.price_range; i++) {
    priceRange += '$';
  }
  const classes = useStyles();
  return (
    <CardWrapper color={'primary'} className={classes.root}>
      <CardActionAreaWrapper>
        <CardMedia className={classes.media} image={props.image} title={props.name} />
        <CardContentWrapper bgcolor={'cardBackgroundColor'}>
          <Typography variant="body2" color={'primary'} component="div">
            <StyledBox color={'primary'}>{props.name}</StyledBox>
            <StyledBox color={'primary'}>{props.price} kr</StyledBox>
            <StyledBox>
              <StyledBox color={'money'} style={{ position: 'absolute', right: 20, bottom: 10 }}>
                {priceRange}
              </StyledBox>
            </StyledBox>
          </Typography>
        </CardContentWrapper>
      </CardActionAreaWrapper>
    </CardWrapper>
  );
};

export default CardElement;
