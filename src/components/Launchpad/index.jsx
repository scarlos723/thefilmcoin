import {
  Paragraph,
  Section,
  Table,
  Title
} from './styles'

export default function Launchpad () {
  return (
    <Section>
      <Title>
        FILM<span>COIN </span>
        <br />
        The IDO Exchange Launchpad
      </Title>
      <p style={{ textAlign: 'center', marginBottom: 12 }}>
        FILM<span>COIN</span> Token IDO Launchpad Summary: <br />
      </p>
      <Paragraph>

        Our goal is to raise a maximum of USD
        $3 million and a minimum of USD $500 thousand.
        Some of the financial assumptions may change with
        ETH / USD exchange rates and volatility, but the
        following numbers are best effort projected estimates
        as of Marhch 10, 2022.
        <strong>Projected Assumption – 1 ETH = USD $2999.00</strong>
      </Paragraph>

      <Table>
        <tbody>
          <tr>
            <td>
              <p>
                <span>
                  <strong>Hard Cap</strong>
                </span>
              </p>
            </td>
            <td> <p>880 ETH - this may change with exchange rates.</p> </td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>Max Contribution</strong>
                </span>
              </p>
            </td>
            <td> <p>  Unlimited.</p></td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>Exchange Rate</strong>
                </span>
              </p>
            </td>
            <td> <p> 1 ETH = 42,850 FilmCoin Utility Tokens (FLIKS) - this may change with ETH exchange rates.</p></td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>Token Contract Address</strong>
                </span>
              </p>
            </td>
            <td>
              <a href='https://etherscan.io/token/0x9280abf1af455d6228def9c93b5e6d85f3f1ecc8'>
                <p>https://etherscan.io/token/0x9280abf1af455d6228def9c93b5e6d85f3f1ecc8</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>Launch Date and Time</strong>
                </span>
              </p>
            </td>
            <td> <p>8AM GMT March 10</p></td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>Launch Time-Frame</strong>
                </span>
              </p>
            </td>
            <td>
              <p>30 days (based on Block Number TBC). </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span>
                  <strong>Launch Completion</strong>
                </span>
              </p>
            </td>
            <td>
              <p>
                Token launch will end when either the maximum
                number of ETH are raised or block number (TBC)
                is reached.
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    </Section>
  )
}
