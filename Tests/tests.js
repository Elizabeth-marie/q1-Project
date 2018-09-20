const {expect} = chai

describe('check tests are running', () => {
  it('Check Tests running', () => {
    expect(true).to.equal(true);
  })
  })

describe('heading is there', () => {
  it('is there', () => {
    let header = document.getElementsByClassName('header')
    let pageHeader = header[0]
  expect(pageHeader.innerText).to.equal("Find a Quote")
  })
})

describe('card panel is hidden', () => {
  it('is hidden', () => {
    let cardPanel = document.getElementById('cardPanel')
  expect(cardPanel.hidden).to.equal(true)
  })
})

describe('function checks quotes', () => {
  it('checks quote array', () => {
  expect(true).to.equal(true)
  })
})
