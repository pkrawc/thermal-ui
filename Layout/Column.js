import styled from 'styled-components'
import { media } from 'variables'

const getPercent = (col, total = 12) => `${100 / (total/col)}%`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: ${
    ({smCol, columns}) =>
      smCol ? getPercent(smCol) : '0'
  };
  max-width: ${
    ({smCol, columns}) =>
      smCol ? getPercent(smCol) : '100%'
  };
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-left: ${
    ({offset}) => offset ? getPercent(offset) : '0'
  };
  @media (min-width: ${media.small}) {
    flex-basis: ${
      ({smCol, mdCol}) =>
        mdCol ? getPercent(mdCol) :
        smCol ? getPercent(smCol) : '0'
    };
    max-width: ${
      ({smCol, mdCol}) =>
        mdCol ? getPercent(mdCol) :
        smCol ? getPercent(smCol) : '100%'
    };
  }
  @media (min-width: ${media.medium}) {
    flex-basis: ${
      ({smCol, mdCol, lgCol}) =>
        lgCol ? getPercent(lgCol) :
        mdCol ? getPercent(mdCol) :
        smCol ? getPercent(smCol) : '0'
    };
    max-width: ${
      ({smCol, mdCol, lgCol}) =>
        lgCol ? getPercent(lgCol) :
        mdCol ? getPercent(mdCol) :
        smCol ? getPercent(smCol) : '100%'
    };
  }
`
